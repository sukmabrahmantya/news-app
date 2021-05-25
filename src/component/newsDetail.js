import React from 'react';
import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography
} from '@material-ui/core'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { getNewsDetail } from '../redux/data/api';

const styles = theme => ({
  root: {
    boxShadow: 'none',
    transition: "0.3s",
    maxWidth: '95%'
  },
  media: {
    height: 500
  }
});


class NewsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount() {
    const { newsDetail, history } = this.props;
    if(!newsDetail) {
      history.push('/')
    }
  }  

  render() {
    const { newsDetail, classes, history, getNewsDetail } = this.props;
    // const date = new Date((newsDetail.publishedAt).slice(0,10))
    // let monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format;

    return(
      <Grid 
        style={{marginTop: '3rem', marginBottom: '3rem'}}
        spacing={2} container
        direction="row" justify="center"
        alignItems="center"
        // align="center"
      >
        {
          newsDetail ?
            <Card className={classes.root}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{marginBottom: '1rem'}}
                  startIcon={<ArrowBack />}
                  onClick={() => {
                    history.push('/')
                    getNewsDetail('')
                  }}
                >
                  Back
                </Button>
                <CardMedia
                  className={classes.media}
                  image={newsDetail.urlToImage ? newsDetail.urlToImage : 'https://th.bing.com/th/id/R855e8ca01684f0d61e302ba09a177bfd?rik=TbKuqNR1U%2bV6Iw&riu=http%3a%2f%2ffremontgurdwara.org%2fwp-content%2fuploads%2f2020%2f06%2fno-image-icon-2.png&ehk=piUctuaeByVRg5s2YCzOsXApik4AfjUmmzMKA1cPKEs%3d&risl=&pid=ImgRaw'}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="p">
                    {newsDetail.author}, {(newsDetail.publishedAt).slice(0,10)}
                    {/* {newsDetail.author}, {`${date.getDate()} ${monthName(date)} ${date.getFullYear()}`} */}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {newsDetail.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {newsDetail.description}
                  </Typography>
                </CardContent>
                <CardActions style={{marginLeft: '0.5rem'}}>
                  <Button size="small" color="primary" 
                    onClick={() => {
                      window.open(newsDetail.url, '_blank').focus();
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
            </Card>
          :
          <>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h1">
              Page Not Found
            </Typography>
          </>
        }
      </Grid>
    ) 
  };
};

const mapStateToProps = state => {
  const newsReducer = state.data;
  return {
    newsDetail: newsReducer && newsReducer.newsDetail
  };
};

const mapDispatchToProps = {
  getNewsDetail
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(NewsDetail)));