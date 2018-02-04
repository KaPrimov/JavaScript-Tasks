import React, { Component } from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'

import { connect } from 'react-redux'
import { fetchDetailsAction, addReviewActionCreator } from '../../actions/furnitureActions'

class DetailsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reviewText: '',
      rating: 3
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onReviewSubmit = this.onReviewSubmit.bind(this)
  }

  componentWillMount() {
    this.props.getData(this.props.match.params.id)
    
  }

  onReviewSubmit(event) {
    event.preventDefault()
    let review = {
      comment: this.state.reviewText,
      rating: this.state.rating,
      user: localStorage.getItem('user'),
      createdOn: Date.now()
    }
    this.props.addReview(this.props.match.params.id, review)
  }

  onChange(event) {
    this.setState({ reviewText: event.target.value })
  }

  onClick(event) {
    this.setState({ rating: Number(event.target.value) })
  }

  render() {
    const { make, model, year, image, price, description, material } = this.props.item

    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>Furniture Details</h1>
          </div>
        </div>
        <div className='row space-top'>
          <div className='col-md-4'>
            <div className='card text-white bg-primary'>
              <div className='card-body'>
                <blockquote className='card-blockquote'>
                  <img alt={image} src={image} />
                </blockquote>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <p>Make: {make}</p>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Material: {material}</p>
            <a href='#' className='btn btn-primary'>Like</a>
          </div>
        </div>
        <div className='row space-top'>
          <div className='col-md-8'>
            <ReviewForm reviewText={this.state.reviewText} rating={this.state.rating}
              onReviewSubmit={this.onReviewSubmit} onChange={this.onChange}
              onClick={this.onClick} />
          </div>
          {this.props.reviews && this.props.reviews.map((review, key) => {
            return (<Review
              user={review.user}
              rating={review.rating}
              comment={review.comment} key={key} />)
          })}
        </div>
      </div>
    )
  }
}

function mapState(state, ownProps) {
  const item = state.furniture.filter(f => f.id == ownProps.match.params.id)[0]
  console.log(item)
  return {
    item: item || {
      make: 'Loading...',
      model: 'Loading...',
      year: 'Loading...',
      price: 'Loading...',
      image: 'Loading...',
      description: 'Loading...',
      material: 'Loading...',
      reviews: []
    },
    reviews: item ? item.reviews : []
  }
}

function mapDispatch(dispatch) {
  return {
    getData: (id) => dispatch(fetchDetailsAction(id)),
    addReview: (furnitureId, item) => dispatch(addReviewActionCreator(furnitureId, item))
  }
}

export default connect(mapState, mapDispatch)(DetailsPage)
