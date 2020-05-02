import React, { useState, useEffect } from "react";
import { AppBarFun } from "./AppBar";
import AddTransactionTab from "./AddTransactionTab";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Calendar from "react-calendar";
import ListItem from "@material-ui/core/ListItem";
import "react-calendar/dist/Calendar.css";
import { Link, Route } from "react-router-dom";
import Reccuring from "./TransactionTab";
import { FriendsTab } from "./Friends";
import { AccountPage } from "./AccountDetails";
import { PersonalTab } from "./Personal";
import { auth, db, snapshotToArray } from "./firebase";

export default function App(props) {
  const [Transactions, setTransactions] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [user, setUser] = useState(null);
  const image = avatar
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

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("avatar")
        .onSnapshot((snapshot) => {
          const updated_avatar = snapshotToArray(snapshot);
          setAvatar(updated_avatar);
        });
    }
  }, [user]);

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <AppBarFun user={user}></AppBarFun>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: 550,
            height: 800,
            display: "flex",
            justifyContent: "center",
            paddingTop: 30,
          }}
          height="150"
        >
          <Paper>
            <ListItem
              divider={true}
              style={{
                width: 350,
                flexDirection: "column",
              }}
            >
              {console.log(user.transactions)}
              <AddTransactionTab user={user} />
              {Transactions.map((t) => {
                return <Reccuring key={t.id} t={t} avatar ={user.avatar}/>;
              })}
            </ListItem>
          </Paper>
        </div>
        <div style={{ display: "flex", width: 900, paddingTop: 30 }}>
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <Paper>
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
              <div style={{ flexGrow: 1 }}>
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
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
