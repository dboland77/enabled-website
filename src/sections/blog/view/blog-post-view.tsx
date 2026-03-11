'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import { BlogPost, getAllBlogPosts } from 'src/data/blog-posts';
import { fDate } from 'src/utils/format-time';
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

import BlogPostCard from '../components/blog-post-card';

type Props = {
  post: BlogPost;
};

export default function BlogPostView({ post }: Props) {
  const router = useRouter();
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <MainLayout>
      <Box
        sx={{
          pt: { xs: `${HEADER.H_MOBILE}px`, md: `${HEADER.H_DESKTOP}px` },
          bgcolor: 'background.default',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 300, md: 480 },
            overflow: 'hidden',
          }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            sx={{
              width: '100%',
              height: '100%',
              '& img': {
                objectFit: 'cover',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)',
            }}
          />
          <Container
            maxWidth="lg"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              pb: { xs: 4, md: 6 },
            }}
          >
            <Stack spacing={2} sx={{ maxWidth: 800 }}>
              <Chip
                label={post.category}
                size="small"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  width: 'fit-content',
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: 'common.white',
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                {post.title}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  src={post.author.avatar}
                  alt={post.author.name}
                  sx={{ width: 48, height: 48, border: '2px solid white' }}
                />
                <Box>
                  <Typography variant="subtitle1" color="common.white" fontWeight={600}>
                    {post.author.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {fDate(post.publishedAt)} · {post.readTime}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Content */}
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
          <Button
            startIcon={<Iconify icon="solar:arrow-left-linear" />}
            onClick={() => router.push('/blog')}
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            Back to Blog
          </Button>

          <Box
            sx={{
              '& h2': {
                typography: 'h4',
                mt: 5,
                mb: 2,
                color: 'text.primary',
              },
              '& h3': {
                typography: 'h5',
                mt: 4,
                mb: 2,
                color: 'text.primary',
              },
              '& p': {
                typography: 'body1',
                color: 'text.secondary',
                mb: 2,
                lineHeight: 1.8,
              },
              '& ul, & ol': {
                pl: 3,
                mb: 3,
              },
              '& li': {
                typography: 'body1',
                color: 'text.secondary',
                mb: 1,
                lineHeight: 1.8,
              },
              '& strong': {
                color: 'text.primary',
                fontWeight: 600,
              },
              '& blockquote': {
                borderLeft: 4,
                borderColor: 'primary.main',
                pl: 3,
                py: 1,
                my: 3,
                bgcolor: 'background.neutral',
                borderRadius: 1,
                '& p': {
                  fontStyle: 'italic',
                  mb: 0,
                },
              },
              '& table': {
                width: '100%',
                borderCollapse: 'collapse',
                my: 3,
                '& th, & td': {
                  border: 1,
                  borderColor: 'divider',
                  p: 2,
                  typography: 'body2',
                },
                '& th': {
                  bgcolor: 'background.neutral',
                  fontWeight: 600,
                },
              },
            }}
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          <Divider sx={{ my: 6 }} />

          {/* Author Box */}
          <Card
            sx={{
              bgcolor: 'background.neutral',
              boxShadow: 'none',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                <Avatar
                  src={post.author.avatar}
                  alt={post.author.name}
                  sx={{ width: 80, height: 80 }}
                />
                <Box textAlign={{ xs: 'center', sm: 'left' }}>
                  <Typography variant="overline" color="text.secondary">
                    Written by
                  </Typography>
                  <Typography variant="h6">{post.author.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Founder of enableD with expertise in disability rights, employment law, and
                    workplace inclusion. Passionate about making workplaces accessible for everyone.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Container>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Box sx={{ bgcolor: 'background.neutral', py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
              <Typography variant="h4" sx={{ mb: 4 }}>
                Related Articles
              </Typography>
              <Grid container spacing={4}>
                {relatedPosts.map((relatedPost) => (
                  <Grid item xs={12} sm={6} md={4} key={relatedPost.slug}>
                    <BlogPostCard post={relatedPost} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        )}
      </Box>
    </MainLayout>
  );
}

// Simple markdown-like formatting
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    // Wrap consecutive list items
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      if (match.includes('1.')) {
        return `<ol>${match}</ol>`;
      }
      return `<ul>${match}</ul>`;
    })
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    // Paragraphs
    .replace(/^(?!<[hulo]|<blockquote)(.+)$/gm, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    // Tables (basic support)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean);
      const isHeader = match.includes('---');
      if (isHeader) return '';
      const cellTag = cells[0]?.includes('---') ? 'th' : 'td';
      return `<tr>${cells.map((cell) => `<${cellTag}>${cell.trim()}</${cellTag}>`).join('')}</tr>`;
    });
}
