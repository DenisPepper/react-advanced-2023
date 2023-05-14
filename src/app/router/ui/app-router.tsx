import {Route, Routes} from "react-router-dom";
import {routes} from "shared/router-config/router-config";

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, element}) => <Route key={path} path={path} element={element} />)}
        </Routes>
    );
}
