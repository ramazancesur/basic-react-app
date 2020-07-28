import React, { useEffect, useState } from 'react';
import { getAllCapabilities } from '../store/actions/TestAction'
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux'

import MaterialTable from 'material-table'

import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));


export default function testCapabilities() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const testCapabilitiesData = useSelector(state => {
        return state.testReducer.data
    });

    const errorMessage = useSelector(state => {
        return state.testReducer.errorMessage;
    });

    const getMaterialData = (testData) => {
        let itemTypes = testData.capabilityItemTypes;
        const types = testData.type;
        let currentVal = itemTypes.map((item, index) => {
            return {
                type: types[index],
                id: item.id,
                index,
                name: item.name,
                helpText: item.help !== null ? item.help.text : ""
            }
        })
        return currentVal;
    }


    const rowCreator = (rowData) => {
        return {
            testRowData: testCapabilitiesData.capabilityItemTypes[rowData.index],
            testRowType: rowData.type
        };
    }

    const checkedList = [{ rowindex: -1, subEventList: {} }];

    const handleChange = (event) => {
        const eventVal = JSON.parse(event.target.name);
        if (checkedList.find(x => x.rowindex === eventVal.rowIndex) === undefined) {
            checkedList.push({ rowindex: eventVal.rowIndex, subEventList: {} })
        }
        checkedList.find(x => x.rowindex === eventVal.rowIndex).subEventList[eventVal.testID] = event.target.checked;
    };

    const btnCheckedList = () => {
        if (checkedList.size != 0) {
            debugger
            checkedList.map(checkBoxItem=> {
                console.log(checkBoxItem)
            })
        }
    }

    return (
        <div>
            <Button variant="contained" onClick={() => dispatch(getAlltestCapabilities())} color="primary">
                GET ALL test CAPABİLİTİES
            </Button>
            {testCapabilitiesData.version !== undefined
                &&
                <MaterialTable
                    columns={[
                        { title: 'type', field: 'type' },
                        { title: 'id', field: 'id' },
                        { title: 'name', field: 'name' },
                        { title: 'help Text', field: 'helpText' }
                    ]}
                    data={getMaterialData(testCapabilitiesData)}
                    title="test MODEL"
                    detailPanel={rowData => {
                        return (
                            <div className={classes.root}>
                                {rowCreator(rowData).testRowType === "Select" &&
                                    <Grid container spacing={1} key={rowData.index}>
                                        <Grid container item xs={12} spacing={3}>
                                            {rowCreator(rowData).testRowData.values.value.map((testObjects, index) =>
                                                <Grid item xs={3}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox key={index} onChange={handleChange} name={JSON.stringify({ "testID": testObjects.id, "rowIndex": rowData.index })} />
                                                        }
                                                        label={testObjects.name}
                                                    />
                                                </Grid>
                                            )}
                                            <Grid item xs={3} spacing={3}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="large"
                                                    className={classes.button}
                                                    onClick={btnCheckedList}
                                                    startIcon={<SaveIcon />}
                                                > 
                                                    Save
                                                </Button>
                                            </Grid>

                                        </Grid>

                                    </Grid>
                                }
                            </div>
                        )
                    }}
                />
            }
        </div>
    );
}