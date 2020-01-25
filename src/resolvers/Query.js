import { getUserId } from '../utils/getUserId';

export const Query = {
  me(_, args, { prisma, request }, info) {
    const id = getUserId(request);
    return prisma.query.user({ where: { id } }, info);
  },
  users(
    parent,
    { query, first, skip, after, orderBy },
    { prisma },
    info
  ) {
    const where = query && {
      where: { OR: [{ name_contains: query }] }
    };
    const opArgs = { first, skip, after, orderBy, ...(where || {}) };
    return prisma.query.users(opArgs, info);
  }
};
