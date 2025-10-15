import { useState, useEffect } from 'react';

export default function useSetTimer(initialInterval) {  
    const[time, setTime] = useState(initialInterval)
        useEffect(()=>{
        if(time <= 0){
            return;
        }
        
        const initialInterval = setInterval(()=>{
            setTime(prev => {
                if(prev <= 1){
                    clearInterval(initialInterval)
                    return 0;
                }
                return prev-1; 
            })
        },1000);

        return () => clearInterval(initialInterval);
    },[time]);
    return time;
}
