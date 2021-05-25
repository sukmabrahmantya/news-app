import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
} from '@material-ui/core';
import {
  Menu,
  Close,
} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { getNewsDetail } from '../redux/data/api';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    // color: 'black'
  },
  menu: {
    color: "#21409A",
    // paddingLeft: '2rem',
    // paddingRight: '2rem'
  },
  logo: {
    cursor: 'pointer'
  },
  image: {
    align: 'center',
    height: '20px'
  }
})

class HeaderComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false
    }
  }
  render() {
    const { classes, history, getNewsDetail } = this.props;
    const { isMenu } = this.state

    return (
      <AppBar position="fixed" className={classes.root}>
        <Toolbar variant="dense">
          <Grid container justify="space-between" align="center" alignItems="center">
            <Grid item className={classes.border}>
              <Button
                color="primary"
                className={classes.menu}
                startIcon={isMenu == false ? <Menu className={classes.openMenu} /> : <Close />}
                onClick={() => {
                  this.setState({ isMenu: !isMenu })
                }}
              >
                {isMenu == false ? 'Menu' : 'Tutup'}
              </Button>
            </Grid>
            <Grid item >
              <div
                className={classes.logo}
                onClick={() => {
                  history.push('/')
                  getNewsDetail('')
                }}
              >
                <img
                  className={classes.image} 
                  src="https://akcdn.detik.net.id/community/media/visual/2020/09/17/logo-detikcom.png?d=1"
                  alt="Detik dot com"
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  getNewsDetail
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(HeaderComponent)));