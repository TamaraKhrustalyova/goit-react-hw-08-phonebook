import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Suspense} from 'react';
import {AppBar}   from 'components/AppBar/AppBar';

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <main>
                <Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </div>
    )
}
