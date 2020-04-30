import React, { useState, useEffect } from "react";
import { AppBarFun } from "./AppBar";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, Route } from "react-router-dom";
import RecurringDetails from "./EditTransaction";
import Reccuring from "./Recurring";
import { FriendsTab } from "./Friends";
import { AccountPage } from "./AccountDetails";
import { PersonalTab } from "./Personal";
import AddTrans from "./AddTransaction";
import { auth, db, snapshotToArray } from "./firebase";

export default function App(props) {
  const [Transactions, setTransactions] = useState([
    {
      id: 0,
      title: "Internet Bill",
      Date: "May 1",
      Schedule: "Monthly",
      TotalPayment: "100",
    },
    {
      id: 1,
      title: "Phone Bill",
      Date: "May 1",
      Schedule: "Monthly",
      TotalPayment: "1200",
    },
  ]);
  const [transaction_open, setTransactionOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
    });

    return unsubscribe;
  }, [props.history]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("transactions")
        .onSnapshot((snapshot) => {
          const updated_transactions = snapshotToArray(snapshot);
          setTransactions(updated_transactions);
        });
    }
  }, [user]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <AppBarFun></AppBarFun>
      <div style={{ display: "flex" }}>
        <Paper
          style={{
            width: 400,
            height: 800,
            display: "flex",
            flexDirection: "column",

            AlignItems: "center",
          }}
          height="150"
        >
          {Transactions.map((t) => {
            return (
            <Reccuring key = {t.id} title = {t.title}/>
            );
          })}
          <div>
            <Paper
              style={{
                width: 350,
                height: 50,
                alignSelf: "center",
                marginRight: 10,
                marginTop: 10,
                marginLeft: 10,
                marginBottom: 10,
                display: "flex",
                flexDirection: "column",
              }}
              marginTop="15"
              marginLeft="15"
            >
              <div style={{ height: "50px", display: "flex" }}>
                <div
                  style={{ display: "flex", flexGrow: 1, alignItems: "center" }}
                  button
                  onClick={() => {
                    setTransactionOpen(true);
                  }}
                >
                  <Typography>Add Transaction</Typography>
                </div>
              </div>
            </Paper>

            <AddTrans
              open={transaction_open}
              onClose={() => {
                setTransactionOpen(false);
              }}
              user={user}
            />
          </div>
        </Paper>
        <Paper style={{ display: "flex", flexGrow: 1 }}>
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <Tabs indicatorColor="secondary" textColor="primary">
              <Tab
                label="Friends"
                textColorSecondary
                button
                to={"/app/friends"}
                component={Link}
              />
              <Tab
                label="Personal"
                button
                to={"/app/personal"}
                component={Link}
              />
            </Tabs>
            <Paper style={{ flexGrow: 1 }}>
              <Route
                path="/app/friends"
                render={(routeProps) => {
                  return <FriendsTab {...routeProps} />;
                }}
              />
              <Route
                path="/app/personal"
                render={(routeProps) => {
                  return <PersonalTab {...routeProps} />;
                }}
              />
              <Route
                path="/app/account"
                render={(routeProps) => {
                  return <AccountPage {...routeProps} />;
                }}
              />
              <Route
                path="/app/calendar"
                render={(routeProps) => {
                  return <Calendar {...routeProps} />;
                }}
              />
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  );
}
