<h1>Abertura de Pacote de Cartas</h1>
<p>Pequena aplicação simulando a abertura de um pacote de cartas inpirada em jogos como Hearthstone e Magic Arena.</p>
<h2>Sobre:</h2>
<p>Projeto desenvolvido em estudo para consumo de APIs. Acredito que uma das APIs gratuitas mais completas disponíveis hoje em dia é a <a href="https://pokeapi.co/">PokeAPI</a>. Provavelmente este é um dos motivos que justifique a grande quantidade de tutoriais de como contruir uma Pokedex. E justamente assitindo uma aula sobre construção de Pokedex que comecei a questionar como poderia utilizar o conhecimento de consumo da API para criar algo diferente.</p>
<p>Então lembrei de card games onde normalmente existe uma opção de abertura de pacotes de cartas para aumentar sua coleção e pensei em tentar construir uma aplicação baseada nisso.</p>
<p>Este foi um projeto no qual pude perceber de forma mais clara o meu crescimento principalmente no desenvolvimento de lógica de programação. Foi o primeiro projeto em que consegui idealizar e logo em seguida ir desenvolvendo a lógica de maneira bem fluida e natural. Percebi também uma evolução no sentido de saber atuar de forma mais efetiva nos bugs e erros encontrados ao longo do desenvolvimento, maior efetividade em momentos de pesquisa quando necessário para suprir alguma necessidade e/ou dúvida.</p>
<p>Tudo isso tornou esse projeto muito especial para mim, mesmo sendo pequeno e simples ele me mostrou que existe um evolução na minha jornada de estudos e que a dedicação tem dado resultados.</p>
<p>É um projeto daqueles que a gente se diverte criando e que não dá vontade de parar.</p>

<h2>Funcionalidades:</h2>
<p>As funcionalidade da aplicação consistem em:</p>
<ul>
    <li>Preencher um Array com 5 números sorteados entre 1 e 151</li>
    <li>Preencher um Array com 5 números sorteados entre 1 e 100</li>
    <li>Utilizar os números do primeiro Array para buscar as informações de cada pokemon na API</li>
    <li>Utilizar os números do segundo Array para definir a raridade e/ou valor da carta de acordo com o intervalo do número sorteado</li>
    <li>Criar 5 cartas utilizando as informações retornadas da API</li>    
    <li>Exibir as cartas para o usuário</li>
    <li>Contar a quantidades de pacotes já abertos</li>
    <li>Informar ao usuário quando não houverem mais pacotes a serem abertos.</li>
</ul>

<P>Todas essas funcionalidade ocorrem no momento em que o usuário clica para efetuar a "abertura" do pacote de forma a deixar os eventos o menos previsíveis quanto possível.</P>

<h2>Demonstração</h2>
<img src="img/card-pack-open.gif">

<h2>Tecnologias utilizadas</h2>
    <table>
    <thead>
      <tr>
        <th class="tg-c3ow">HTML</th>
        <th class="tg-c3ow">CSS</th>
        <th class="tg-c3ow">Javascript</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-c3ow">4,3%</td>
        <td class="tg-c3ow">19,2%</td>
        <td class="tg-c3ow">76,5%</td>
      </tr>
    </tbody>
    </table>
    <ul>
        <li>A biblioteca <a href="https://micku7zu.github.io/vanilla-tilt.js/">vanilla tilt JS</a> foi utilizada para criar o efeito de perspectiva no pacote de cartas.</li>
    </ul>
    
    
 <h2>Os possíveis próximos passos</h2>
 <p>Este é um projeto que sempre está aberto a evolução. Abaixo uma lista de possíveis melhorias e implementações:</p>
    <ul>
        <li>Melhorar responsividade</li>
        <li>Sistema de armazenamento das cartas</li>        
        <li>Sistema de moedas para compra de mais pacotes</li>
        <li>Sistema de venda de cartas repitidas para obter moedas</li>
        <li>Sistema de ganho de moedas ao longo do tempo ou como recompensas e determinadas ações</li>
        <li>Aumentar o número de informações nas cartas</li>
        <li>Animar as cartas para aparecerem uma por vez</li>
        <li>Recriar a aplicação em React</li>
    </ul>
    <h2>Você pode testa a aplicação aqui</h2>
    <a href="https://card-pack-open.netlify.app/">Clique aqui para testar</a>
