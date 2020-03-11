import React, {useState} from 'react';

const useStorage = (init) => {
    let [darkMode, setDarkMode] = useState(init);

return [darkMode, setDarkMode];
}


export default useStorage;