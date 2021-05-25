import React from 'react';
import { Grid } from '@material-ui/core'
import Header from './component/header';
import Footer from './component/footer';
import NewsDetails from './component/newsDetail'
import MainMenu from './component/mainMenu';
import { connect } from 'react-redux';
import { getNews, getNewsDetail } from './redux/data/api';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }  


  render() {
    const {newsDetail} = this.props;

    return(
      <Router>
        <Grid 
          spacing={2} container
          direction="row" justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route exact path="/" component={MainMenu} />
              <Route exact path="/details/:id"  component={NewsDetails} />
              <Redirect to="/" />
            </Switch>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
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
  getNews, getNewsDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(App)