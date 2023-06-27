import { createBrowserRouter } from 'react-router-dom';

import BaseLayout from '@layout/BaseLayout';
import Home from '@pages/Home';

const router = createBrowserRouter([
    {
        path: '',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
]);

export default router;
