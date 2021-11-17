import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import NonadminRoutes from './NonadminRoutes';

export default function Routes({ user }) {
  return (
    <>
      {user?.isAdmin && <AdminRoutes user={user} />}
      <NonadminRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
