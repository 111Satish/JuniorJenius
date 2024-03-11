
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './selectLetter.css';

const SelectLetter = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [totalScore, setTotalScore] = useState(0);

  const handleCorrectAnswer = () => {
    toast.success('Correct Answer!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTotalScore((prevScore) => prevScore + 1);
    setCurrentLevel((prevLevel) => prevLevel + 1);
  };

  const levels = [
    {
      title: 'Alphabet Learning Game Level 1',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
      ],
    },
    {
      title: 'Alphabet Learning Game Level 2',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
      ],
    },
    {
      title: 'Alphabet Learning Game Level 3',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 4',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 5',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 6',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 7',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
      ],
    },
    
    {
      title: 'Alphabet Learning Game Level 8',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 9',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 10',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 11',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 12',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 13',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 14',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
      ],
    },
  
    
    {
      title: 'Alphabet Learning Game Level 15',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
      ],
    },

    
    {
      title: 'Alphabet Learning Game Level 16',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
      ],
    },

    
    {
      title: 'Alphabet Learning Game Level 17',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
      ],
    },

    
    {
      title: 'Alphabet Learning Game Level 18',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
      ],
    },

    
    {
      title: 'Alphabet Learning Game Level 19',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
      ],
    },

    
    {
      title: 'Alphabet Learning Game Level 20',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
        { letter: 'U', imageUrl: './public/letters/u.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 21',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
        { letter: 'U', imageUrl: './public/letters/u.jpg'},
        { letter: 'V', imageUrl: './public/letters/v.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 22',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
        { letter: 'U', imageUrl: './public/letters/u.jpg'},
        { letter: 'V', imageUrl: './public/letters/v.jpg'},
        { letter: 'W', imageUrl: './public/letters/w.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 23',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
        { letter: 'U', imageUrl: './public/letters/u.jpg'},
        { letter: 'V', imageUrl: './public/letters/v.jpg'},
        { letter: 'W', imageUrl: './public/letters/w.jpg'},
        { letter: 'X', imageUrl: './public/letters/x.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 24',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
        { letter: 'U', imageUrl: './public/letters/u.jpg'},
        { letter: 'V', imageUrl: './public/letters/v.jpg'},
        { letter: 'W', imageUrl: './public/letters/w.jpg'},
        { letter: 'X', imageUrl: './public/letters/x.jpg'},
        { letter: 'Y', imageUrl: './public/letters/y.jpg'},
      ],
    },

    {
      title: 'Alphabet Learning Game Level 25',
      data: [
        { letter: 'A', imageUrl: './public/letters/a.jpg'},
        { letter: 'B', imageUrl: './public/letters/b.jpg'},
        { letter: 'C', imageUrl: './public/letters/c.jpg'},
        { letter: 'D', imageUrl: './public/letters/d.jpg'},
        { letter: 'E', imageUrl: './public/letters/e.jpg'},
        { letter: 'F', imageUrl: './public/letters/f.jpg'},
        { letter: 'G', imageUrl: './public/letters/g.jpg'},
        { letter: 'H', imageUrl: './public/letters/h.jpg'},
        { letter: 'I', imageUrl: './public/letters/i.jpg'},
        { letter: 'J', imageUrl: './public/letters/j.jpg'},
        { letter: 'K', imageUrl: './public/letters/k.jpg'},
        { letter: 'L', imageUrl: './public/letters/l.jpg'},
        { letter: 'M', imageUrl: './public/letters/m.jpg'},
        { letter: 'N', imageUrl: './public/letters/n.jpg'},
        { letter: 'O', imageUrl: './public/letters/o.jpg'},
        { letter: 'P', imageUrl: './public/letters/p.jpg'},
        { letter: 'Q', imageUrl: './public/letters/q.jpg'},
        { letter: 'R', imageUrl: './public/letters/r.jpg'},
        { letter: 'S', imageUrl: './public/letters/s.jpg'},
        { letter: 'T', imageUrl: './public/letters/t.jpg'},
        { letter: 'U', imageUrl: './public/letters/u.jpg'},
        { letter: 'V', imageUrl: './public/letters/v.jpg'},
        { letter: 'W', imageUrl: './public/letters/w.jpg'},
        { letter: 'X', imageUrl: './public/letters/x.jpg'},
        { letter: 'Y', imageUrl: './public/letters/y.jpg'},
        { letter: 'Z', imageUrl: './public/letters/z.jpg'},
      ],
    },
  ];

  const isGameCompleted = currentLevel > levels.length;

  return (
    <div className="alphabet-game-container">
      <h1>{!isGameCompleted ? levels[currentLevel - 1].title : 'Game Completed!'}</h1>
      {!isGameCompleted ? (
        <Level
          levelData={levels[currentLevel - 1].data}
          onCorrectAnswer={handleCorrectAnswer}
        />
      ) : (
        <TotalScore totalScore={totalScore} />
      )}
    </div>
  );
};

const Level = ({ levelData, onCorrectAnswer }) => {
  const [currentLetter, setCurrentLetter] = useState('');
  const [score, setScore] = useState(0);

  const getRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * levelData.length);
    return levelData[randomIndex];
  };

  const handleLetterClick = (clickedLetter) => {
    if (clickedLetter === currentLetter) {
      setScore(score + 1);
      onCorrectAnswer();
    } else {
      toast.error('Incorrect Answer!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    const newLetter = getRandomLetter();
    setCurrentLetter(newLetter.letter);
  };

  useEffect(() => {
    const initialLetter = getRandomLetter();
    setCurrentLetter(initialLetter.letter);
  }, []);

  return (
    <>
      <div className="image-container">
        <img src={levelData.find((item) => item.letter === currentLetter)?.imageUrl} alt={`Image for letter ${currentLetter}`} />
      </div>
      <div className="letter-options">
        {levelData.map((item) => (
          <button key={item.letter} onClick={() => handleLetterClick(item.letter)}>
            {item.letter}
          </button>
        ))}
      </div>
      <div className="score">
        <p>Score: {score}</p>
      </div>
    </>
  );
};

const TotalScore = ({ totalScore }) => {
  return (
    <div className="total-score">
      <h2>Total Score: {totalScore}</h2>
    </div>
  );
};

export default SelectLetter;
