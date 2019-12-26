import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
  // return JSX that show how field should look like
  renderField(field) {
    // es6 for to pull properties from object
    // ie: now just have to use touched instead of field.meta.touched
    // and error instead of field.meta.error
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    // field is an event handler
    // ...field.input JSX for
    // onChange={field.input.onChange}
    // onFocus={field.input.onFocus}
    // onBlur={field.input.onBlur}
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);

    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // get property from props

    const { handleSubmit } = this.props;

    // this.onSubmit is our helper function
    // .bind(this) there so that the components this
    // is available in onSubmit function

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

// will be called automatically when form is submit
function validate(values) {
  // values would for our form names and values
  // {title: "asdf", categories: "asdf", content: "asdf"}

  const errors = {};

  // validate values
  if (!values.title) {
    errors.title = 'Enter a title!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if (!values.content) {
    errors.content = 'Enter some content please';
  }

  // if errors object is empty, the form is fine to submit
  // if errors has any properties, redux assumes the form
  // is invalid
  return errors;
}

export default reduxForm({
  validate, // same as validate: validate
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostNew));
