<script setup lang="ts">
import LogoutTemplate from '@/templates/LogoutTemplate.vue';
</script>

<template>
  <LogoutTemplate title="Regras e Punições" :menu-selected="'main'">
    <template #wrapper>
      <p>
        Como em todos os lugares, o Sugoi Game tem as suas regras, é essencial que elas sejam
        cumpridas por todos os usuários do jogo. O Sugoi Game não deixa de ser uma sociedade, e
        regras são necessárias e devem ser obedecidas para que a convivência seja possível sem
        problemas para todos nós.
      </p>
      <p>
        Se as regras não forem obedecidas, o usuário será punido conforme as regras abaixo: • Não
        utilizar métodos imprevistos pelo jogo que deem vantagem para em relação aos outros
        jogadores ou gerem desvantagens para os outros. • Não é aceitável nenhuma ação, que por
        ventura venha a ofender os outros jogadores e administradores. De primeira vista, estas
        regras podem ser mínimas e deixada de lado, mas se bem analizadas, elas abrangem um enorme
        leque de possibilidades de causá-las em jogo. As principais estarão aqui listadas, e caso
        você tenha alguma dúvida em relação à estas dúvidas, procurar a Administração para saber se
        pode ou não. Pois geralmente quando há dúvidas, a resposta será “não é permitido”.
        Lembrando, que ao infligir as regras, o usuário receberá punições.
      </p>
      <p>
        Quando usamos a expressão roubar, nós nos referimos a qualquer forma de exploração que
        exista no jogo que lhe dê vantagem sobre os outros de forma ilegal. Isto inclui ter mais de
        uma conta na qual se use para ter vantagem, se aproveitar de bugs no jogo ao invés de
        reportá-los aos administradores.
      </p>
      <p>
        Ofender, incluir imagens e palavras que possam ofender os outros. Isto também inclui spam no
        sistema de mensagens, ofensas no fórum ou em nome de seus personagens, equipes e/ou
        organizações. Caso você seja uma pessoa de bom senso, não terá nenhum tipo de problema.
      </p>
      <p class="has-text-centered">Sendo específico:</p>
      <ul>
        <li>
          CONTEÚDO IMPRÓPRIO EM HABILIDADES PERSONALIZADAS: Sugoi Game oferece um leque de
          personalizações bem variado onde você pode criar habilidades e Akumas no Mi do jeito que
          quiser, mas nem por isso permitiremos o uso de palavrões ou textos ofensivos no momento de
          criação do item personalizado.
        </li>
        <li>
          MULTI: Multi é o mesmo que ter mais de uma conta tirando vantagem sobre. No Sugoi Game é
          permitido ter mais de uma conta, entretanto, se você usar para ajudar na pontuação de um
          personagem principal, isto jamais será permitido. Caso você tenha uma conta e compartilhe
          o mesmo computador com um irmão ou outro parente, deve nos informar imediatamente, pois
          todos de sua família podem jogar o Sugoi Game.
        </li>
        <li>
          VITÓRIAS COMBINADAS (SWAP): Algumas pessoas com a intenção de ajudar algum amigo, ou
          usuário que esteja cada vez mais perto de estar no topo do ranking, criam personagens, ou
          usam o principal, para que este “amigo” possa lutar e ganhar os combates tranquilamente.
          Isto é um roubo de vantagem descarado, na qual jamais aceitaremos. Nós proibimos e punimos
          com veemência qualquer jogador que esteja participando desta ação, seja o que está dando a
          vantagem e aquele que ganha vitórias.
        </li>
        <li>
          ROBÔS (BOTS): Quando um jogador encontrar algum programa que prometa dar vantagens há seu
          personagem, é importante saber que este programa não está sendo tão bonzinho a ponto de
          apenas dar as coisas. Ele irá pegar sua senha, deletando sua conta a seguir, e mais
          importante, ele pode armazenar diversas informações importantes que estão em seu
          computador, e assim que descoberto, poderá ser punido pelos Administradores já que usar
          estes bots não é permitido. Informe-nos imediatamente assim que encontrar algum destes
          programas.
        </li>
        <li>
          CONTEÚDO OFENSIVO: Conteúdos ofensivos incluem qualquer mensagem de texto e/ou imagem que
          agrida os membros ou possa a vir a agredir. Imagens com tópicos religiosos e semelhantes
          devem ser evitados ao máximo e em caso de reclamação por parte de alguém, será editado.
          Imagens e textos pornográficos são proibidos. Quando a agressão for não intencional ela
          não será levada em conta, desde que seja corrigida assim que solicitado. No caso de
          reincidência ou conteúdo com objeto claro de ofender haverá punição que pode ser aplicada
          somente sobre o líder ou todos os membros da equipe e/ou organização, dependendo do
          julgamento. O conteúdo ofensivo se aplica para nomes de personagens, equipes,
          organizações, fóruns, mensagens, comunicados e semelhantes.
        </li>
        <li>
          CALÚNIA: Ao for comprovado que um jogador deseja difamar alguém, o mesmo será punido
          severamente, pois não aceitaremos esta atitude desrespeitosa de criar má fama há algum
          jogador sem motivo.
        </li>
      </ul>
      <p class="has-text-centered">PUNIÇÕES</p>
      <p>Existem basicamente 3 tipos de punições:</p>
      <p>*Advertência;</p>
      <p>*Remoção de personagens;</p>
      <p>*Remoção da conta;</p>
      <p>
        Em todos os 3 tipos os personagens podem ser nerfados ( perderem pontos em habilidades ou
        qualquer coisa ganha de modo ilegal ).
      </p>
      <p class="has-text-centered">Conteúdo impróprio em habilidades personalizadas:</p>
      <p>
        A habilidade ou Akuma no Mi será deletada imediatamente sem aviso prévio, e no caso de Akuma
        no Mi, a mesma NÃO será devolvida.
      </p>
      <p class="has-text-centered">Multi:</p>
      <p>
        1ª incidência = Personagens envolvidos nos Multis serão nerfados ( perderem pontos em
        habilidades ou qualquer coisa ganha de modo ilegal ).
      </p>
      <p>2ª incidência = A conta será banida e os personagens deletados.</p>
      <p class="has-text-centered">Vitórias Combinadas (SWAP):</p>
      <p>1ª incidência = Personagens envolvidos serão nerfados.</p>
      <p>2ª incidência = A conta será banida e os personagens deletados.</p>
      <p class="has-text-centered">
        Ofensas e Ameaças (a qualquer outro jogador ou membro do STAFF):
      </p>
      <p>1ª incidência = Advertência.</p>
      <p>
        2ª incidência = Remoção de personagens e reset da conta, deixando apenas o capitão intacto.
      </p>
      <p>3ª incidência = Exclusão doa conta.</p>
      <p class="has-text-centered">Utilização de robôs, bugs e táticas não previstas:</p>
      <p>1ª incidência = Personagens envolvidos serão nerfados.</p>
      <p>2ª incidência = Exclusão da conta.</p>
      <p class="has-text-centered">Calúnia:</p>
      <p>1ª incidência = Advertência.</p>
      <p>
        2ª incidência = Remoção de personagens e reset da conta, deixando apenas o capitão intacto.
      </p>
      <p>3ª incidência = Exclusão doa conta.</p>
      <p>
        Vale lembrar que todos são iguais nos direitos e deveres. Tanto jogadores VIP’s como os que
        não são, serão submetidos às mesmas regras e punições. Em caso de situações não previstas
        neste código, as penalidades ficarão a critério do STAFF.
      </p>
    </template>
  </LogoutTemplate>
</template>

<style scoped></style>
