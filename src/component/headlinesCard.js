import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getNewsDetail } from '../redux/data/api';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    transition: "0.3s",
    maxWidth: '75vw',
    '&.MuiPaper-elevation1': {
      boxShadow: 'none'
    }
  },
  media: {
    height: 120
  }
});

class HeadlineCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    const { article, classes, getNewsDetail, history } = this.props;

    return (
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => {
            getNewsDetail(article)
            history.push(`/details/${(article.title).replace(/\s/g, "-")}`)
          }}
        >
          <CardMedia 
            className={classes.media}
            image={article.urlToImage ? article.urlToImage : 'https://th.bing.com/th/id/R855e8ca01684f0d61e302ba09a177bfd?rik=TbKuqNR1U%2bV6Iw&riu=http%3a%2f%2ffremontgurdwara.org%2fwp-content%2fuploads%2f2020%2f06%2fno-image-icon-2.png&ehk=piUctuaeByVRg5s2YCzOsXApik4AfjUmmzMKA1cPKEs%3d&risl=&pid=ImgRaw'}
            title={article.title}
          />
          <CardContent>
            <Typography variant="body2" component="p" gutterBottom>
              {article.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  getNewsDetail
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(HeadlineCard)));