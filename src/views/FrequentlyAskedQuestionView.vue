<script setup lang="ts">
import LogoutTemplate from '@/templates/LogoutTemplate.vue';
import { ref } from 'vue';

const faqList = ref([
  {
    question: 'Acabei de me cadastrar, o que faço agora?',
    answer:
      'Seu primeiro objetivo é comprar um barco para poder recrutar mais tripulantes e poder navegar por aí.'
  },
  {
    question: 'Como consigo dinheiro para um barco?',
    answer:
      'A forma inicial de conseguir dinheiro para um barco é indo ao subúrbio da ilha se for um pirata ou indo até a base da marinha da ilha se você for um marinheiro, lá tem missões que ao serem concluídas te recompensam com experiência e dinheiro.'
  },
  {
    question: 'Não consigo iniciar uma missão. O que eu faço?',
    answer:
      'Verifique se você cumpre todos os requisitos para as missões lendo atentamente o que é necessário para iniciá-la.'
  },
  {
    question: 'Como subo de nível?',
    answer:
      'Na barra da tripulação, onde aparecem os cartazes de procurado, aparece uma Espada Amarela na frente dos tripulantes que já podem evoluir, você pode clicar na espada ou ir até a Visão Geral da tripulação através do menu do jogo. Fique de olho na tripulação, todos seus tripulantes tem sua própria experiência individual.'
  },
  {
    question: 'Como compro um navio?',
    answer: 'Você encontrará barcos a venda no Estaleiro de cada Ilha.'
  },
  {
    question: 'Como recruto mais tripulantes?',
    answer:
      'Na Ilha Atual, existe uma opção chamada "Recrutar", lá você irá iniciar uma campanha em busca de novos tripulantes na ilha, quando o tempo acabar você poderá escolher um novo tripulante, dar um nome para ele, então ele irá fazer parte da sua tripulação.'
  },
  {
    question: 'Como navego pelo oceano?',
    answer:
      'Na menu você encontrará uma opção "Ir para o oceano", lá você deve traçar uma rota de navegação, dê dois cliques nos quadros ao redor do seu navio para ir criando sua rota. Depois de criar a rota basta clicar em "Navegar" e acompanhar seu barco navegando até chegar ao seu destino.'
  },
  {
    question: 'Como enfrento outros jogadores?',
    answer: 'Para atacar outros jogadores no oceano você tem que cumprir alguns requisitos:',
    topics: [
      'Ter seu tripulante de nível mais alto no nível 10',
      'Piratas atacam a todos enquanto marinheiros só atacam piratas',
      'Nem você nem seu alvo podem estar ao redor de ilhas. Em volta de cada ilha é uma zona neutra, nao da pra atacar ninguém la.',
      'Os tripulantes de nível mais alto de cada tripulação devem estar na mesma faixa de nível, por exemplo, nos Blues (North Blue, East Blue, South Blue e West Blue) a faixa de nível é de 5 níveis de diferença, então se seu personagem de nível mais alto estiver no nível 15, você só pode atacar jogadores de nível do mais forte entre 10 e 20. Na Grand Line a faixa de nível é de 10 níveis, e no Novo Mundo Não existe faixa de nível.',
      'Se você fizer parte de uma aliança ou frota, você não pode atacar jogadores que também participam da sua aliança ou frota',
      'Se você fizer parte de uma aliança ou frota e ela entrar em guerra contra outra aliança ou frota, todas as restrições acima listadas são ignoradas para os jogadores membros da aliança ou frota inimiga de guerra, e vocês podem se atacar a qualquer momento em qualquer lugar.'
    ]
  },
  {
    question: 'Entrei em uma batalha contra um Rei dos Mares ou outro jogador. O que eu faço?',
    answer:
      'As batalhas são baseadas em turnos, um jogador de cada vez movimentando apenas 1 personagem. Primeiro escolha se você irá atacar ou mover seus personagens, cada jogador pode fazer até 5 movimentos na sua vez. Se escolher atacar, você deve selecionar o personagem que irá atacar, em seguida escolher a habilidade e depois escolher nde ele irá atacar. Se você quiser acertar um Rei dos Mares, você precisa subir até a última linha do tabuleiro e ficar bem próximo a ele para acertar o ataque.'
  },
  {
    question: 'Onde encontro Akumas no Mi?',
    answer: 'Existem algumas formas de se obter uma Akuma no Mi no jogo:',
    topics: [
      'Realizando Mergulhos com algum tripulante que aprendeu a profissão de Mergulhador',
      'Realizando Explorações com algum tripulante que aprendeu a profissão de Arqueólogo',
      'Participando de eventos que dão alguma Akuma no Mi como prêmio'
    ]
  },
  {
    question: 'Onde fica a próxima ilha?',
    answer:
      'É seu papel como capitão de uma tripulação descobrir e explorar o mundo por sua conta. Mas você pode pedir ajuda a outros jogadores que já conhecem o caminho para te informarem.'
  },
  {
    question: 'Quando fui aprender uma habilidade apareceu: Formulário incompleto',
    answer:
      'Sugoi Game tem um inovador sistema de personalização de habilidades, você precisa escolher um nome, uma descrição e escolher uma foto para sua habilidade, certifique de ter escolhido esses três itens que você conseguirá aprender a habilidade.'
  }
]);

const scrollToItem = (index: number) => {
  const targetElement = document.getElementById(`faq-${index}`);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <LogoutTemplate
    title="FAQ"
    icon="question"
    hint="Aqui ficam registradas as respostas para algumas das perguntas mais frequentes, pode haver uma solução rápida para sua dúvida."
    :menu-selected="'tutorial'"
    :hide-navbar="true"
  >
    <template #wrapper>
      <div class="wrapper mb-4">
        <div class="wrapper-header">Perguntas Frequentes:</div>
        <div class="wrapper-body">
          <a
            class="is-block link"
            v-for="(item, index) in faqList"
            :key="index"
            @click="scrollToItem(index)"
          >
            {{ item.question }}
          </a>
          <p>Em caso de dúvidas acesse a área Tutorias no Forum do jogo.</p>
        </div>
      </div>
      <div
        class="wrapper mb-4"
        ref="faqItems"
        v-for="(item, index) in faqList"
        :key="index"
        :id="`faq-${index}`"
      >
        <div class="wrapper-header">{{ item.question }}</div>
        <div class="wrapper-body">
          <p>{{ item.answer }}</p>
          <ul v-if="item.topics">
            <li v-for="(topic, index) in item.topics" :key="index">{{ topic }}</li>
          </ul>
        </div>
      </div>
    </template>
  </LogoutTemplate>
</template>

<style scoped></style>
