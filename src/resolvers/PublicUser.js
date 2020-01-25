import { getUserId } from '../utils/getUserId';

export const PublicUser = {
  email: {
    fragment: 'fragment userId on PublicUser { id }',
    resolve(parent, args, { request }, info) {
      const userId = getUserId(request, false);

      if (userId && userId === parent.id) {
        return parent.email;
      }
      return null;
    }
  }
};
