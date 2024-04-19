import React from 'react';
import { fetchRandomUser } from './api';
import { Button, Card } from '@mui/material';
import ListWrapper from './ListWrapper';



export default function ListPage() {

    const [data, setData] = React.useState<any | null>([]);

    const handleFetchRandomUser = async () => {
        try {
            const userData = await fetchRandomUser();
            setData(userData);
        } catch (error) {
            console.error('Error fetching Random user:', error);
        }
    };


    return (
        <>
            <Button style={{ background: "#2F5D8A", color: "#FFFFFF", marginBottom : 10 }}
                onClick={handleFetchRandomUser}>
                {"Fetch Users"}
            </Button>
            <Card>
                {ListWrapper(data)}
            </Card>
        </>
    )
}