import { Helmet } from 'react-helmet-async';
// @mui
import { alpha } from '@mui/material/styles';
import { Container, Typography, Box } from '@mui/material';
// components
import { useSettingsContext } from '../../components/settings';

import {
  Profile,
  ProfileCover,
  ProfileFriends,
  ProfileGallery,
  ProfileFollowers,
} from '../../sections/@dashboard/user/profile';

import {
  _userAbout,
  _userFeeds,
  _userFriends,
  _userGallery,
  _userFollowers,
} from '../../_mock/arrays';

// ----------------------------------------------------------------------

export default function BlankPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Blank Page | Minimal UI</title>
      </Helmet>

      <Container>
        <Typography variant="h4"> Timeline </Typography>

          <Profile info={_userAbout} posts={_userFeeds} />

      </Container>
    </>
  );
}
