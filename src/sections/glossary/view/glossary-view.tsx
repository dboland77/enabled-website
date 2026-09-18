'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import { getGlossaryByLetter } from 'src/data/glossary-terms';
import Iconify from 'src/components/iconify';

const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const LETTERS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(ALL_LETTERS.length / LETTERS_PER_PAGE);

export default function GlossaryView() {
  const glossaryByLetter = getGlossaryByLetter();
  const activeLetters = new Set(Object.keys(glossaryByLetter));

  const firstActive = ALL_LETTERS.find((l) => activeLetters.has(l)) ?? 'A';
  const [selectedLetter, setSelectedLetter] = useState(firstActive);
  const [letterPage, setLetterPage] = useState(
    Math.floor(ALL_LETTERS.indexOf(firstActive) / LETTERS_PER_PAGE)
  );

  const visibleLetters = ALL_LETTERS.slice(
    letterPage * LETTERS_PER_PAGE,
    letterPage * LETTERS_PER_PAGE + LETTERS_PER_PAGE
  );

  const handleSelectLetter = (letter: string) => {
    setSelectedLetter(letter);
    setLetterPage(Math.floor(ALL_LETTERS.indexOf(letter) / LETTERS_PER_PAGE));
  };

  const currentTerms = glossaryByLetter[selectedLetter] ?? [];

  return (
    <MainLayout>
      <Box
        sx={{
          pt: { xs: `${HEADER.H_MOBILE + 40}px`, md: `${HEADER.H_DESKTOP + 60}px` },
          pb: { xs: 8, md: 12 },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={6}>
            {/* Page heading */}
            <Stack spacing={2} textAlign="center">
              <Typography variant="h2" component="h1">
                Employment Tribunal Glossary
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }}>
                A comprehensive reference guide to key terms and concepts in employment tribunal
                proceedings in England and Wales.
              </Typography>
            </Stack>

            {/* Letter navigator */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
              <IconButton
                onClick={() => setLetterPage((p) => Math.max(0, p - 1))}
                disabled={letterPage === 0}
                sx={{
                  bgcolor: 'primary.darker',
                  color: 'common.white',
                  width: 44,
                  height: 44,
                  '&:hover': { bgcolor: 'primary.main' },
                  '&.Mui-disabled': { bgcolor: 'grey.200', color: 'text.disabled' },
                }}
              >
                <Iconify icon="solar:alt-arrow-left-linear" width={22} />
              </IconButton>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {visibleLetters.map((letter) => {
                  const hasTerms = activeLetters.has(letter);
                  const isSelected = letter === selectedLetter;
                  return (
                    <Chip
                      key={letter}
                      label={letter}
                      clickable={hasTerms}
                      onClick={hasTerms ? () => handleSelectLetter(letter) : undefined}
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        width: 52,
                        height: 52,
                        borderRadius: '50%',
                        bgcolor: isSelected
                          ? 'primary.main'
                          : hasTerms
                          ? 'primary.darker'
                          : 'grey.200',
                        color: hasTerms ? 'common.white' : 'text.disabled',
                        cursor: hasTerms ? 'pointer' : 'default',
                        boxShadow: isSelected ? '0 0 0 3px rgba(37,150,190,0.4)' : 'none',
                        transition: 'all 0.15s ease-in-out',
                        '&:hover': hasTerms && !isSelected
                          ? { bgcolor: 'primary.main', color: 'common.white' }
                          : {},
                        '& .MuiChip-label': { px: 0 },
                      }}
                    />
                  );
                })}
              </Box>

              <IconButton
                onClick={() => setLetterPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
                disabled={letterPage === TOTAL_PAGES - 1}
                sx={{
                  bgcolor: 'primary.darker',
                  color: 'common.white',
                  width: 44,
                  height: 44,
                  '&:hover': { bgcolor: 'primary.main' },
                  '&.Mui-disabled': { bgcolor: 'grey.200', color: 'text.disabled' },
                }}
              >
                <Iconify icon="solar:alt-arrow-right-linear" width={22} />
              </IconButton>
            </Box>

            {/* Terms for selected letter */}
            <Box>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  bgcolor: 'primary.darker',
                  mb: 3,
                }}
              >
                <Typography variant="h5" sx={{ color: 'common.white', fontWeight: 700 }}>
                  {selectedLetter}
                </Typography>
              </Box>

              <Stack spacing={2}>
                {currentTerms.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: idx % 2 === 0 ? '#1a2e3a' : '#1a7fa8',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'common.white', fontWeight: 700, mb: 0.75 }}
                    >
                      {item.term}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.8 }}
                    >
                      {item.definition}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}
