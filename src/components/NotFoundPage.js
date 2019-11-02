import React from 'react';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <strong>404 Page !</strong> Page Could Not Founded
      </div>
            </div>
        );
    }
}
export default NotFoundPage;
