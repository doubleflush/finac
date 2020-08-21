import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Form, HorizontalInput, Input} from "./IncomeTableStyles"; 
import faker from "faker";

export default function IncomeDialog(props) {

    const accounts = [];
    for (let i = 0; i < 4; i++) {
      accounts.push(faker.finance.accountName());
    } 

    console.log(accounts);
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"New Income"}</DialogTitle>
          <DialogContent>
          <Form>
            <Input id="date" type="date"
              width="8rem"
              label="Date of Transaction"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <HorizontalInput>
              <Input id="source" label="From" />
              <Input id="account" 
                select
                label="Receiving Account"
                SelectProps={{
                  native: true,
                }}
              >
                {accounts.map((option) => (
                  <option value={option}>
                    {option}
                  </option>
                ))}
              </Input>
            </HorizontalInput>
            <HorizontalInput>
              <Input id="amount" label="Amount" 
                type="number"
                InputLabelProps={{
                  shrink: true,
                }} 
              />
            </HorizontalInput>
          </Form>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary" autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }