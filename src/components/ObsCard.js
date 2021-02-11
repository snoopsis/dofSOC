import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },

  title: {
    variant: "body2",
    color: "#0b5bab",
    marginTop: 10
  },
  obsTitle: {
    height: "30px",
    background: "#1976d2",
    color: "#fff"
  },
  dofLogo: {
    width: "100px"
  },
  tfmcLogo: {
    width: "100px"
  },
  textField: {
    marginTop: 20,
    width: "100%"
  }
});

const ObsCard = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <React.Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent style={{ maxWidth: 800 }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ textAlign: "center" }}
          >
            <Grid item xs={6}>
              <img
                src="http://localhost:3000/imagens/dof-logo.png"
                className={classes.dofLogo}
                alt="DOF logo"
              />
            </Grid>

            <Grid item xs={6}>
              <img
                src="http://localhost:3000/imagens/tfmc-logo.png"
                className={classes.dofLogo}
                alt="TechnipFMC logo"
              />
            </Grid>
          </Grid>

          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title} gutterBottom>
                Cartao de Observacao
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.obsTitle}>
            <Typography
              variant="body1"
              style={{ textAlign: "center", padding: 3 }}
            >
              Preenchido pelo Observador
            </Typography>
          </Grid>

          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="DATA"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="HORA"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                  ampm={false}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Local/Area"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.textField}
            />
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body1" className={classes.title}>
                Tipo de Observacao:
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              <Typography variant="body2" className={classes.title}>
                <strong>Condicao</strong>
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "center" }}>
              <Typography variant="body2" className={classes.title}>
                <strong>Acao</strong>
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Positiva
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Negativa
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>

            <Grid item xs={3} style={{ textAlign: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Positiva
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs={3} style={{ textAlign: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Negativa
                  </Typography>
                }
                labelPlacement="top"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Atividade"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Descricao"
                variant="outlined"
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body1" className={classes.title}>
                Acao imediata:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Eliminar o perigo?
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Implementar acao mais segura?
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Alterar projeto ou barreira?
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Etiquetar equipamento?
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedE}
                    onChange={handleChange}
                    name="checkedE"
                    color="primary"
                  />
                }
                label={
                  <Typography variant="body2" style={{ color: "#1976d2" }}>
                    Informar Supervisor / HSE Advisor
                  </Typography>
                }
                labelPlacement="start"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Outra? Favor Especificar"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.textField}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default ObsCard;
