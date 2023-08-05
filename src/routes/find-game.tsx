
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

export default function FindGame() {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    Finding Game!
                    <button onClick={signOut}> Sign Out </button>
                </div>
            )}
        </Authenticator>
    );
}