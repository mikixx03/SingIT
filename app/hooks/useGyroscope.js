import { useState, useEffect } from 'react';
import { Gyroscope } from 'expo-sensors';

export default function useGyroscope() {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0
    });
    useEffect(() => {
        let subscription;  
        (async () => {
            await Gyroscope.setUpdateInterval(1000);
            subscription = Gyroscope.addListener((newData) => {
                setData(newData);
            });
        })();
        return () => {
            subscription && subscription.remove();
        };
    }, []);
    return data;
}
