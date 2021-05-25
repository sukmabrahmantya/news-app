import React from 'react';
import {
  Typography,
  Grid,
  IconButton
} from '@material-ui/core';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube
} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import footerMenu from '../assets/footerMenu.png';

const styles = theme => ({
  root: {
    paddingTop: '2rem', 
    paddingBottom: '2rem',
    backgroundColor: '#f0f0f0',
    borderTop: '5px solid #21409A'
    // height: '5rem',
    // color: 'black'
    // border: "1px solid blue"
  },
  border: {
    // border: '1px solid red'
  },
  image: {
    height: '2rem'
  },
  menu: {
    width: '80%'
  }
})

class FooterComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid 
        container direction="row"
        justify="center" alignItems="flex-start"
        align="center" spacing={1}
        className={classes.root}
      >
         <Grid item xs={12} md={8} className={classes.border}>
           <div>
             <img className={classes.menu} src={footerMenu} />
           </div>
        </Grid>
        <Grid item xs={12} md={4} className={classes.border}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={1}
            style={{paddingRight: '1rem', paddingLeft: '1rem'}}
          >
            <Grid item>
              <img
                className={classes.image} 
                src="https://akcdn.detik.net.id/community/media/visual/2020/09/17/logo-detikcom.png?d=1"
                alt="Detik dot com"
              />
            </Grid>
            <Grid item>
              <img
                className={classes.image} 
                src="https://cdn.detik.net.id/assets/images/logo_detiknetwork.png?v=5c18ebe5"
                alt="Detik dot com"
              />
            </Grid>
            <Grid item style={{marginTop: '1rem'}}>
              <Typography variant="body2">
                Connect With Us
              </Typography>
            </Grid>
            <Grid item style={{marginBottom: '1rem'}}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <IconButton size="small">
                  <Facebook/>
                </IconButton>
                <IconButton size="small">
                  <Twitter/>
                </IconButton>
                <IconButton size="small">
                  <Instagram/>
                </IconButton>
                <IconButton size="small">
                  <LinkedIn/>
                </IconButton>
                <IconButton size="small">
                  <YouTube/>
                </IconButton>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2">
              Copyright @ 2021 detikcom
              </Typography>
              <Typography variant="body2">
                All right reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, {withTheme: true})(FooterComponent)