import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from 'features/BaseLayout';
import Home from 'pages/Home';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
