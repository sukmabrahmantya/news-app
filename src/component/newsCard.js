import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getNewsDetail } from '../redux/data/api';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    borderRadius: 0,
    transition: "0.3s",
    '&.MuiPaper-elevation1': {
      boxShadow: 'none'
    }
  },
  media: {
    height: 120
  }
});

class NewsCard extends React.Component{
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
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(NewsCard)));