import { fetchData } from "../utils/web-requests";

export default function Admin() {

    return (
        <div>
            Admin page for dev tools and experiments.
            <div style={{marginTop: 10}}>
                API Test
                <button style={{margin: 10}} onClick={ fetchData }> Call API </button>
            </div>
        </div>
      );
}