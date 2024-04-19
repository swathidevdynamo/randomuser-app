import * as React from 'react';
import { Box, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemButton, Divider, Card } from '@mui/material';
import ModalWrapper  from './ModalWrapper';

export type ListProps = {
  map: any;
  data: [];
  _value: any;
};

const ListWrapper = (data: ListProps) => {

  const [openPopup, setOpenPopup] = React.useState(false);
  const [listitem, setlistItem] = React.useState<any | null>({});

  function handleItemClick(value: object) {
    setOpenPopup(!openPopup);
    setlistItem(value)
  };

  function ClosePopup(){
    setOpenPopup(!openPopup)
  }

  return (
    <div data-testid={`users_list`}>
      <Box>
        <Grid item md={12} lg={6}>
          <div>
            {data.map((_value: {
              name: {
                first: string; title: string, last: string
              },
              picture: {
                large: string
              },
              gender: string,
              email: string,
              phone: string
            }, index: number) => {
              return <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={_value.picture.large} />
                  </ListItemAvatar>
                  <ListItemButton onClick={() => { handleItemClick(_value) }}>
                    <ListItemText
                      primary={`${_value.name.title} ${_value.name.first} ${_value.name.last}`}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </List>
            })}
          </div>
        </Grid>
      </Box>
      {openPopup ? <Card>
          {ModalWrapper(listitem,ClosePopup)}
      </Card> : null}
    </div>
  );
}

export default ListWrapper;
