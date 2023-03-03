import { createContext } from "react";
const userContext = createContext({
    user: {
        name: 'abc',
        email: 'dummy'
    }
});

export default userContext;