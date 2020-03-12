import {useEffect} from 'react';

const useDarkMode = (dep) => {
    return (
    useEffect(() => {
        let body = document.querySelector('body');
        console.log(dep)
        switch(dep) {
            case null:
            break;
            case 'true':
            case true:
                body.classList.add('dark-mode')
                localStorage.setItem('use-dark', true);

            break;
            case 'false':
            case false:
                body.classList.remove('dark-mode');
                localStorage.setItem('use-dark', false);
                console.log('cp2');
            break;
            default:
                break;
        }
    },[dep]))
}

export default useDarkMode;