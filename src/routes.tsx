import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Layout } from '~/layout';

const defaultRoutes = [
  {
    path: '',
    element: <Layout />,
    // errorElement: (
    //   <BaseLayout>
    //     <ErrorPage />
    //   </BaseLayout>
    // ),
    children: [
      {
        path: '',
        element: <App />,
      },
    ],
  },
];

export const router = createBrowserRouter(defaultRoutes, { basename: '/' });
