import FrequentlyAskedQuestionView from '@/views/FrequentlyAskedQuestionView.vue';
import GameRulesView from '@/views/GameRulesView.vue';
import HomeView from '@/views/HomeView.vue';
import NewspaperView from '@/views/NewspaperView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import RecoveryPasswordView from '@/views/RecoveryPasswordView.vue';
import RegisterView from '@/views/RegisterView.vue';
import SelectCrewView from '@/views/SelectCrewView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: getTitle('Aventuras sem limites') }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { title: getTitle('Cadastre-se') }
    },
    {
      path: '/game-rules',
      name: 'game-rules',
      component: GameRulesView,
      meta: { title: getTitle('Regras e Punições') }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: { title: getTitle('Política de privacidade') }
    },
    {
      path: '/frequently-asked-question',
      name: 'frequently-asked-question',
      component: FrequentlyAskedQuestionView,
      meta: { title: getTitle('FAQ') }
    },
    {
      path: '/recovery-password',
      name: 'recovery-password',
      component: RecoveryPasswordView,
      meta: { title: getTitle('Recuperação de senha') }
    },
    {
      path: '/select-crew',
      name: 'select-crew',
      component: SelectCrewView,
      meta: { title: getTitle('Selecionar Tripulação') }
    },
    {
      path: '/newspaper',
      name: 'newspaper',
      component: NewspaperView,
      meta: { title: getTitle('Notícias') }
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: getTitle('Nada por aqui') }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;

interface RouteMeta {
  title?: string;
}

router.beforeEach((to, _from, next) => {
  const meta = to.meta as RouteMeta;
  if (meta && meta.title) {
    document.title = meta.title;
  } else {
    document.title = getTitle();
  }
  next();
});

function getTitle(title?: string): string {
  return `Sugoi Game - One Piece MMORPG - ${title}`;
}
