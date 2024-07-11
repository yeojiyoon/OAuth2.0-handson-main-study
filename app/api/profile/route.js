import { getSession } from '@/app/api-utils/get-session';
// /api/profile
export const GET = async () => {
  const session = await getSession();
  if (!session.accssToken) {
    return Response.json({
      message: '권한이 없습니다.',
    }, {
      status: 401,
    });
  }
  return 0;
};
