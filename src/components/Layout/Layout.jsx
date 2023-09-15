import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Suspense} from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
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
