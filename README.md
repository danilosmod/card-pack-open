<h1>Abertura de Pacote de Cartas</h1>
<p>Pequena aplicação simulando a abertura de um pacote de cartas inpirada em jogos como Hearthstone e Magic Arena.</p>
<h2>Sobre:</h2>
<p>Projeto desenvolvido em estudo para consumo de APIs. Acredito que uma das APIs gratuitas mais completas disponíveis hoje em dia é a <a href="https://pokeapi.co/">PokeAPI</a>. Provavelmente este é um dos motivos que justifique a grande quantidade de tutoriais de como contruir uma Pokedex. E justamente assitindo uma aula sobre construção de Pokedex que comecei a questionar como poderia utilizar o conhecimento de consumo da API para criar algo diferente.</p>
<p>Então lembrei de card games onde normalmente existe uma opção de abertura de pacotes de cartas para aumentar sua coleção e pensei em tentar construir uma aplicação baseada nisso.</p>

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

<h2>Tecnologias utilizadas</h2>
    <table class="tg">
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

