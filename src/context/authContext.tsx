import {useState, createContext, ReactNode} from "react";

interface AuthorizationProps extends AuthorizationState{
    removeUserData: () => void
    setUserData: ({token} : AuthorizationState) => void
    children?: ReactNode
}

interface AuthorizationState {
    //email: string
    token: string
}

const initialState: AuthorizationState = {
    token: '',
};

const authorizationInitialProps: AuthorizationProps = {
    ...initialState,
    setUserData: () => {},
    removeUserData: () => {}
}


// create context
export const AuthorizationContext = createContext(authorizationInitialProps);



export function AuthProvider({ children }: {children: ReactNode}) {
    const [value, setValue] = useState<AuthorizationState>(initialState);

    const setUserData = ({token}: AuthorizationState) => {
        setValue({
            token
        });
    };

    const removeUserData = () => {
        setValue(initialState)
    };

    return (
        <>
            <AuthorizationContext.Provider value={{setUserData, ...value, removeUserData}}>
                {children}
            </AuthorizationContext.Provider>
        </>
    );
}