'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import { getAllBlogPosts } from 'src/data/blog-posts';

import BlogPostCard from '../components/blog-post-card';

export default function BlogView() {
  const posts = getAllBlogPosts();

  return (
    <MainLayout>
      <Box
        sx={{
          pt: { xs: `${HEADER.H_MOBILE + 40}px`, md: `${HEADER.H_DESKTOP + 80}px` },
          pb: { xs: 10, md: 15 },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={8}>
            {/* Hero Section */}
            <Stack spacing={3} textAlign="center" alignItems="center">
              <Typography variant="h2" component="h1">
                Blog
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 700, fontWeight: 400 }}
              >
                Expert insights on disability discrimination, employment law, and creating inclusive
                workplaces. Stay informed about your rights and employer obligations.
              </Typography>
            </Stack>

            {/* Featured Post */}
            {posts.length > 0 && (
              <Box>
                <BlogPostCard post={posts[0]} featured />
              </Box>
            )}

            {/* Posts Grid */}
            <Grid container spacing={4}>
              {posts.slice(1).map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.slug}>
                  <BlogPostCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}
