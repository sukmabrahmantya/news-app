import React from 'react';
import { Grid } from '@material-ui/core'
import HeadlineCard from './headlinesCard'
import PopularCard from './popularCard';
import NewsCard from './newsCard';
import { connect } from 'react-redux';
import { getNews } from '../redux/data/api';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    const { getNews, } = this.props;
    getNews();
  }  


  render() {
    const {news} = this.props;

    return(
      <Grid 
        style={{marginTop: '4rem', marginBottom: '3rem'}}
        spacing={2} container
        direction="row" justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Grid
            style={{padding: '0 10px'}}
            spacing={1} container
            direction="row" justify="center"
            alignItems="flex-start"
          >
            {
              news ? 
                news.articles.map(function (article, index) {
                  if(index <= 5) {
                    return (
                      <Grid item xs={6} md={2} key={index}>
                        <HeadlineCard article={article} />
                      </Grid>
                    )
                  }
                })
              : null
            }

          </Grid>
        </Grid>
        <Grid item xs={12}>
          {
            news ? 
              <Grid
                style={{padding: '0 10px'}}
                spacing={2} container
                direction="row" justify="flex-start"
                alignItems="center"
              >
                  <Grid item xs={12} md={8}>
                    <PopularCard article={news.articles[6]} />
                  </Grid>
                  <Grid item xs={12} md={4} style={{height: 500, overflow: 'auto'}}>
                    <Grid 
                      container direction="row"
                      justify="flex-start" alignItems="flex-start"
                    >
                      {
                        news.articles.map(function (article, index){
                          if(index > 6) {
                            return (
                              <Grid item xs={12} key={index}>
                                <NewsCard  article={article} />
                              </Grid>
                            )
                          }
                        })
                      }
                    </Grid>
                  </Grid>
              </Grid>
              : null
            }
        </Grid>
      </Grid>
    ) 
  };
};

const mapStateToProps = state => {
  const newsReducer = state.data;
  return {
    news: newsReducer && newsReducer.news,
    newsDetail: newsReducer && newsReducer.newsDetail
  };
};

const mapDispatchToProps = {
  getNews
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)