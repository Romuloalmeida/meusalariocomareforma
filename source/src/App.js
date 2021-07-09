import logo from './logo.svg';
import './App.css';
import CurrencyInput from 'react-currency-input-field';
import React, { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Lottie from 'react-lottie';
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import moment from "moment-with-locales-es6"
moment.locale('pt-br');

const quote = "Veja o que acontece no seu salário se a reforma tributária passar!";
const hashtag = "#reformatributaria";

const title = "Meu salário com a reforma"
const description = quote;



var formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function App() {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {


    setInterval(() => {
      setAnimation(true)
      setAnimation(false)
    }, 10000);

  }, [])


  const [dados, setDados] = useState(
    {
      salarioBruto: null,
      INSS: null,
      rendimentoTributavel: null,
      IRRF: null,
      IRRFProposta: null,
      salarioLiquido: null,
      salarioLiquidoProposta: null,
      value: undefined,
      restituicaoAntiga: null,
      restituicaoNova: null
    }
  )

  function onValueChange(value, name) {

    if (value == undefined) {
      setDados({
        value,
        salarioBruto: 0,
        INSS: 0,
        rendimentoTributavel: 0,
        IRRF: 0,
        salarioLiquido: 0,
        IRRFProposta: 0,
        salarioLiquidoProposta: 0,
        restituicaoAntiga: 0,
        restituicaoNova: 0
      });
      return true;
    }

    var INSS = calcularINSS(value);
    var rendimentoTributavel = value - INSS;
    var IRRF = calcularIRRF(rendimentoTributavel);
    var IRRFProposta = calcularIRRF(rendimentoTributavel, false, true);
    var salarioLiquido = rendimentoTributavel - IRRF;
    var salarioLiquidoProposta = rendimentoTributavel - IRRFProposta;

    var restituicaoAntiga = calcularRestituicao(value, INSS)
    var restituicaoNova = calcularRestituicao(value, INSS, true)


    setDados({
      value,
      salarioBruto: value,
      INSS,
      rendimentoTributavel,
      IRRF,
      salarioLiquido,
      IRRFProposta,
      salarioLiquidoProposta,

      restituicaoAntiga,
      restituicaoNova
    });

  }


  function renderArrow() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: require("./lottie/arrow.json"),
    };

    return <Lottie style={{ margin: "-32px" }} options={defaultOptions}
      height={120}
      width={120}
      isStopped={animation}
      isPaused={false} />


  }

  function exibeDiffSalarioLiquido() {

    var diffLiq = (dados.salarioLiquidoProposta - dados.salarioLiquido) * 12
    var diffRestituicao = dados.restituicaoNova - dados.restituicaoAntiga;

    let valor = diffLiq + diffRestituicao;

    if (dados.value == undefined) {
      return <div className="dot-stretching"></div>
    } else {
      if (valor == 0)
        return <span>Nada muda para você!</span>
    }

    var texto = formatter.format(Math.abs(valor))
    let style = {};
    if (valor < 0) {
      style = { color: "red" }
      texto = "MENOS " + texto + " por ano!";
    }
    else {
      style = { color: "green" }
      texto = "MAIS " + texto + " por ano!";
    }
    return <>
      <div style={{ visibility: dados.value != undefined ? "hidden" : "" }} className="dot-stretching"></div>
      <span>Você receberá <span style={style}><br />{texto}</span> </span>
    </>
  }


  function exibirLink(fonte,titulo, data, url) {
    let data_formatada = moment(data, "DD/MM/YYYY h:mm").fromNow();

    return <li style={{marginLeft: 15, marginRight: 15,marginBottom: 15}}><span style={{fontSize: 12 }}>{data_formatada} - </span>{fonte} - <a style={{ color: "white" }} href={url}>{titulo}</a></li>
  }

  return (
    <div className="App" style={{ backgroundColor: "#2e333e" }}>
      <header className="App-header">
        <p>
          Digite o seu salário bruto*:
        </p>
        <CurrencyInput
          id="input-example"
          name="input-name"
          style={{ height: 50, fontSize: 26 }}
          placeholder="Digite o seu salário bruto"
          intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
          defaultValue={0}
          decimalsLimit={2}
          onValueChange={onValueChange}
        />
        <h2>{exibeDiffSalarioLiquido()}</h2>

        <div style={{ fontSize: 11, visibility: dados.value == undefined ? "hidden" : "" }}>
          <b>Dados:</b>
          <ul style={{ textAlign: "left", listStyle: "none" }}>
            <li>Salário Bruto: {formatter.format(dados.salarioBruto)}</li>
            <li>INSS: {formatter.format(dados.INSS)}</li>
            <li>Rendimento tributável: {formatter.format(dados.rendimentoTributavel)}</li>
          </ul>
          <b>Regras atuais</b>
          <ul style={{ textAlign: "left", listStyle: "none" }}>
            <li>Imposto de Renda: {formatter.format(dados.IRRF)}</li>
            <li>Salário Líquido: {formatter.format(dados.salarioLiquido)}</li>
            <li>Restituição anual: {formatter.format(dados.restituicaoAntiga)}</li>
          </ul>
          <b>Com a Proposta</b>
          <ul style={{ textAlign: "left", listStyle: "none" }}>
            <li>Imposto de Renda: {formatter.format(dados.IRRFProposta)}</li>
            <li>Salário Líquido: {formatter.format(dados.salarioLiquidoProposta)}</li>
            <li>Restituição anual: {formatter.format(dados.restituicaoNova)}</li>
          </ul>
        </div>
        <p style={{ fontSize: 10, marginTop: 50, position: "relative", bottom: 15 }}> *Os seus dados <b>NÃO</b> serão gravados e/ou armanezados neste site.<br />Respeitamos a sua privacidade.</p>



        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <p>Compartilhe:</p>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", maxWidth: "200px" }}>

            <WhatsappShareButton title={quote} url={"https://meusalariocomareforma.com.br/"}>
              <WhatsappIcon borderRadius={3} size={40} />
            </WhatsappShareButton>
            <FacebookShareButton quote={quote} url={"https://meusalariocomareforma.com.br/"}>
              <FacebookIcon borderRadius={3} size={40} />
            </FacebookShareButton>
            <TwitterShareButton title={title} url={"https://meusalariocomareforma.com.br/"}>
              <TwitterIcon borderRadius={3} size={40} />
            </TwitterShareButton>
            <LinkedinShareButton title={title} url={"https://meusalariocomareforma.com.br/"}>
              <LinkedinIcon borderRadius={3} size={40} />
            </LinkedinShareButton>
          </div>

        </div>
        {renderArrow()}
      </header>
      <section style={{color: "white"}}>
        <h3 style={{fontSize: "25px" }}>Últimas notícias</h3>

        <p style={{ position: "relative", textAlign: "justify", display: "inline-block", marginBottom: "70px", fontSize: 19 }}>

          <ul style={{marginRight: 15, marginLeft: 15,fontSize: "1.15em",margin: 0,padding: 0, listStyle: "none", textAlign: "left" }}>
            {exibirLink("Estadão","Em encontro com empresários, Guedes reconhece erro na dose da reforma tributária e promete correção.", "08/07/2021 22h28", "https://economia.estadao.com.br/noticias/geral,em-encontro-com-empresarios-guedes-diz-que-reforma-tributaria-nao-aumentara-impostos,70003773157")}
            {exibirLink("G1","Guedes diz que, se houver 'erro na dose', governo vai consertar reforma do Imposto de Renda", "05/07/2021 10h21", "https://g1.globo.com/politica/blog/valdo-cruz/post/2021/07/05/guedes-diz-que-se-houver-erro-na-dose-governo-vai-consertar-reforma-do-imposto-de-renda.ghtml?fbclid=IwAR07nvaqTOPfVJEygYLonGCNvXT75T7KwvpYuZRICr7X-vPrlQglqtCg2Po")}
            {exibirLink("UOL","Reforma tributária: quem ganha R$ 4.500 pagaria R$ 1.057 a mais de IR", "03/07/2021 04h00", "https://economia.uol.com.br/noticias/redacao/2021/07/03/reforma-imposto-de-renda-tabela-declaracao-simplificada-irpf.htm?fbclid=IwAR2kvsxuU6N2ZWS35HoQYBuNrX480oDhqZ1vgoTKHrSbFTy_D4-yXEsUDBc")}
            {exibirLink("G1","Mudanças no Imposto de Renda: veja os principais pontos da proposta do governo", "25/06/2021 14h34", "https://g1.globo.com/economia/noticia/2021/06/25/reforma-do-imposto-de-renda-veja-os-principais-pontos-da-proposta-do-governo.ghtml?fbclid=IwAR1-MYoiE9mlQ-4v32XD3fpH67jwWDoPsntDgjWeusCCubEyZE2e_i7DIwE")}
          </ul>

        </p>
      </section>
      <section id="section05" style={{ color: "white" }}>



        <h3 style={{fontSize: "25px" }}>O que é a reforma tributária?</h3>
        <p style={{marginLeft: "15px",marginRight: "15px", position: "relative", textAlign: "justify", width: "90%", maxWidth: "600px", display: "inline-block", marginBottom: "70px", fontSize: 19 }}>
          <span style={{ position: "absolute", top: "-28px", fontSize: "11px" }}>07/07/2021 às 00:28</span>

          O sistema tributário pode ser reformulado para aumentar ou diminuir os impostos arrecadados e/ou o valor fiscal arrecadado.
          <br /><br />

          Segundo o atual ministro da Economia, Paulo Guedes, o objetivo da reforma tributária brasileira em 2021 não é aumentar a carga tributária e tarifária atualmente paga.
          <br /><br />
          Como o ministro explicou até agora, o objetivo dessa mudança é reorganizar os métodos de pagamento atuais para estimular a atividade econômica e aumentar a eficiência do sistema de cobrança.

          <br /><br />
          Vale lembrar que, de acordo com o site da Câmara dos Deputados, uma empresa brasileira precisa de 1.958 horas para pagar impostos, enquanto o tempo médio nos demais países é de apenas 206 horas.

          <br />
          (Em atualização constante)

        </p>

      </section>
      <section>
        <p style={{ margin: 0, paddingBottom: "12px", color: "white" }}>Este projeto está em constante atualização e pode receber atualizações a qualquer momento.</p>
        <p style={{ margin: 0, paddingBottom: "12px", color: "white" }}>Sugestões? Por favor, me envie um e-mail em <a style={{ color: "white" }} href="mailto:romulosousa17@gmail.com">romulosousa17@gmail.com</a></p>
      </section>      
      <footer style={{backgroundColor: "white"}}>
        <br/>
        <br/>
      <div className="fb-comments" data-href="https://meusalariocomareforma.com.br/" data-width="" data-numposts="1" data-colorScheme="dark"></div>  
      </footer>

    </div>
  );
}


function calcularIRRF(rendimentos, anual = false, novaProposta = false) {
  // Fonte: http://receita.economia.gov.br/acesso-rapido/tributos/irpf-imposto-de-renda-pessoa-fisica#calculo_mensal_IRPF

  let aliquotas = [0, 0.075, 0.15, 0.225, 0.275];    // aliquotas de IR

  let bases = [1903.98, 2826.65, 3751.05, 4664.68, Infinity]; // bases de calculo
  if (anual) {
    bases = [22847.76, 33919.8, 45012.6, 55976.16, Infinity]; // bases de calculo
  }


  if (novaProposta) {
    aliquotas = [0, 0.075, 0.15, 0.225, 0.275];    // aliquotas de IR
    bases = [2500, 3200, 4250, 5300, Infinity]; // bases de calculo
    if (anual) {
      bases = [30000, 38400, 51000, 63600, Infinity];
    }
  }


  // calcula tamanho das faixas de tributacao conforme rendimentos
  const faixas = bases.map(function (b, i, arr) {
    // a faixa atual eh no maximo o valor da base de calculo
    var faixa = Math.min(rendimentos, b)
    // se a base nao for a primeira, precisamos subtrair o valor da base anterior
    if (i !== 0) {
      faixa -= arr[i - 1];
    }
    // bases maiores que rendimentos podem resultar em faixas negativas, por isso zeramos essas
    faixa = Math.max(faixa, 0);
    return faixa;
  });
  // calcula imposto conforme a aliquota de cada faixa e soma ao valor total
  const imposto = faixas.reduce(function (sum, f, i) {
    // calcula imposto da faixa multiplicando sua aliquota
    const impFaixa = (f * aliquotas[i]);
    return sum += impFaixa;
  }, 0);
  // imposto a pagar sobre rendimentos
  return parseFloat(imposto).toFixed(2);
}




function calcularINSS(rendimentos) {
  rendimentos = Math.min(rendimentos, 6433.57); // 6433.57 é o teto para o calculo do INSS

  const aliquotas = [0.075, 0.09, 0.12, 0.14];    // aliquotas de IR
  const bases = [1100, 2203.48, 3305.22, 6433.57]; // bases de calculo

  // calcula tamanho das faixas de tributacao conforme rendimentos
  const faixas = bases.map(function (b, i, arr) {
    // a faixa atual eh no maximo o valor da base de calculo
    var faixa = Math.min(rendimentos, b)
    // precisamos subtrair o valor da base anterior
    if (i !== 0) {
      faixa -= arr[i - 1];
    }
    // bases maiores que rendimentos podem resultar em faixas negativas, por isso zeramos essas
    faixa = Math.max(faixa, 0);
    return faixa;
  });
  // calcula imposto conforme a aliquota de cada faixa e soma ao valor total
  const imposto = faixas.reduce(function (sum, f, i) {
    // calcula imposto da faixa multiplicando sua aliquota
    const impFaixa = parseFloat((f * aliquotas[i]).toFixed(2))
    return sum += impFaixa;
  }, 0);
  // imposto a pagar sobre rendimentos
  return parseFloat(imposto.toFixed(2));
}
window.calcularRestituicao = calcularRestituicao;

function calcularRestituicao(rendimentoBruto, INSS, novaProposta = false) {
  var rendimentoBrutoAnual = rendimentoBruto * 12;
  var desconto = Math.min(16754.34, rendimentoBrutoAnual * 0.2);

  if (novaProposta && rendimentoBruto > 3333)
    desconto = 0;

  var base = rendimentoBrutoAnual - desconto;

  let impostoDevido = calcularIRRF(base, true, novaProposta);
  let impostoJaPago = calcularIRRF(rendimentoBrutoAnual - (INSS * 12), true, novaProposta);

  return ((impostoDevido - impostoJaPago) * -1).toFixed(2);
}

export default App;
