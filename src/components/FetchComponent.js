import { useQuery } from 'react-query'; 
import '../styles/FetchComponent.css';

function FetchComponent() {

    const { isLoading, data, isError, error } = useQuery('main-data', () => {
        return fetch('http://localhost:4000/posts').
        then(res => res.json());
    });

    return (
        <div className="fetchComponent">
            {
                isLoading ?
                    <p className="loadingText">Loading...</p>
                :
                    data?.map(eachData => (
                        <div className="dataCard">
                            { eachData.title }
                        </div>
                    ))
            }

            {
                isError ?
                    <div className="fetchError">
                        { error.message.toString().toUpperCase() }
                    </div>
                :
                    ''
            }
        </div>
    )
}

export default FetchComponent;
