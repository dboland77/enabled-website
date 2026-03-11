'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

import { fDate } from 'src/utils/format-time';
import { BlogPost } from 'src/data/blog-posts';
import Image from 'src/components/image';

type Props = {
  post: BlogPost;
  featured?: boolean;
};

export default function BlogPostCard({ post, featured = false }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${post.slug}`);
  };

  if (featured) {
    return (
      <Card
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.shadows[2],
          transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
          '&:hover': {
            boxShadow: (theme) => theme.shadows[8],
            transform: 'translateY(-4px)',
          },
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '55%' },
              position: 'relative',
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              ratio="16/9"
              sx={{
                height: { xs: 240, md: '100%' },
                minHeight: { md: 360 },
              }}
            />
            <Chip
              label={post.category}
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontWeight: 600,
              }}
            />
          </Box>

          <CardContent
            sx={{
              width: { xs: '100%', md: '45%' },
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="overline"
                color="primary.main"
                sx={{ fontWeight: 700 }}
              >
                Featured Article
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {post.title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {post.description}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Avatar
                  src={post.author.avatar}
                  alt={post.author.name}
                  sx={{ width: 40, height: 40 }}
                />
                <Box>
                  <Typography variant="subtitle2">{post.author.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {fDate(post.publishedAt)} · {post.readTime}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    );
  }

  return (
    <Card
      onClick={handleClick}
      sx={{
        height: '100%',
        cursor: 'pointer',
        bgcolor: 'background.paper',
        boxShadow: (theme) => theme.shadows[1],
        transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
        '&:hover': {
          boxShadow: (theme) => theme.shadows[4],
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          ratio="16/9"
        />
        <Chip
          label={post.category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            fontWeight: 600,
            fontSize: '0.7rem',
          }}
        />
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              minHeight: 56,
            }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              minHeight: 40,
            }}
          >
            {post.description}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ pt: 1 }}
          >
            <Avatar
              src={post.author.avatar}
              alt={post.author.name}
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography variant="caption" fontWeight={600}>
                {post.author.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                {fDate(post.publishedAt)} · {post.readTime}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
