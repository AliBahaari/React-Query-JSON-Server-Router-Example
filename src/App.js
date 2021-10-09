import './App.css';
import FetchComponent from './components/FetchComponent';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/Data" component={FetchComponent} />
                </Switch>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
