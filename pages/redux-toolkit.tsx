import React from 'react';
import { Box, Button, Grid, Theme, Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';
// import { GetStaticProps } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, changeIncrementAmount } from '../store/reducers/counterReducer';

import Layout from '~/components/layout';
import { Tool, tools } from '~/lib/tools';

const useStyles = makeStyles((theme: Theme) => ({
    description: {
        maxWidth: '80ch',
    },
    root: {
        padding: '.5em 2em',
    },
    title: {
        paddingLeft: '1em',
        color: theme.palette.primary.main,
    },
}));

interface Props {
    tool?: Tool;
}

const ReduxToolkit: React.FC<Props> = () => {
    const classes = useStyles();

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    // const incrementAmount = useSelector((state: RootState) => state.counter.incrementAmount);

    // function handleChange(incrementAmountValue: string) {
    //     dispatch(changeIncrementAmount(Number(incrementAmountValue)));
    // }

    return (
        <Layout title="Redux Toolkit">
            <Grid container spacing={4} className={classes.root}>
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" passHref>
                            Home
                        </Link>
                        <Typography color="textPrimary">Redux Toolkit</Typography>
                    </Breadcrumbs>
                </Grid>

                <Grid item xs={12} container justifyContent="center">
                    <Typography variant="h2" className={classes.title}>
                        Redux Toolkit
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Typography variant="body1" className={classes.description}>
                        The official, opinionated, batteries-included toolset for efficient Redux development: <br />
                        Counter: {count}
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center" gap="16px">
                        <Button variant="contained" color="primary" onClick={() => dispatch(decrement())}>
                            decrement
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
                            increment
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Layout>
    );
};

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// export async function getStaticPaths() {
//     return {
//         paths: tools.map((tool) => ({ params: { name: tool.name } })),
//         fallback: false,
//     };
// }

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//     if (params?.name) {
//         const tool = tools.find(({ name: toolName }) => toolName === params.name);
//         return {
//             props: { tool },
//         };
//     }
//     return {
//         props: {},
//     };
// };

export default ReduxToolkit;
