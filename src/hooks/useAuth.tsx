import { useEffect, useState } from "react";
import { gapi } from 'gapi-cjs';

export const useAuth = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [userImage, setUserImage] = useState<string | undefined>(undefined)

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: process.env.VITE_GOOGLE_CLIENT_ID,
            scope: 'email',
          });
        }
        gapi.load('client:auth2', start);
      }, []);

      const onSuccess = (response: any) => {
       // console.log('SUCCESS', response);
        setIsLogged(true)
        setUserImage(response.profileObj.imageUrl)
      };
      const onFailure = (response: any) => {
      //  console.log('FAILED', response);
      };
      const onLogoutSuccess = () => {
       // console.log('SUCESS LOG OUT');
        setIsLogged(false)
      };

      
      return {
        onSuccess,
        onFailure,
        onLogoutSuccess,
        userImage,
        isLogged
      }
}