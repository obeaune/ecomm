# **Ecomm**
Ecommerce project created during Alura's Level Up program.

</br></br>

# **The Twelve Factors**

## **I.** Codebase ☑️
One codebase tracked in revision control, many deploys.
- The project's code is hosted and available on GitHub; its development is incremented every week with new implementations, in specific branches.

## **II.** Dependencies ☑️
Explicitly declare and isolate dependencies.
- The project's dependencies are declared in the `/package.json` file (in each folder). To install the dependencies use the terminal and navigate into the folder and run the npm install command.

## **III.** Config ☑️
Store config in the environment.
- The environment settings are saved in the `.env` file and to run the project correctly it is necessary to fill them in advance.

## **IV.** Backing services ☑️
Treat backing services as attached resources.
- Project support services can be changed by adjusting the configuration file.

## **V.** Build, release, run ☑️
Strictly separate build and run stages.
- Each increment of code is separated into its own branch.

## **VI.** Processes ☑️
Execute the app as one or more stateless processes.
- There is no state storage in this project.

## **VII.** Port binding ☑️
Export services via port binding.
- Each service in the project is accessed through a unique port (you can find them in the `docker-compose` or `dockerfile`).

## **VIII.** Concurrency ☑️
Scale out via the process model.
- The project is separated by non-conflicting processes; which allows each service (_account, finance, order or product_) to be executed without interfering with the functioning of the other.

## **IX.** Disposability ☑️
Maximize robustness with fast startup and graceful shutdown.
- The project uses Docker for its operation, which allows you to send a command for it to be closed "gracefully".

## **X.** Dev/prod parity ☑️
Keep development, staging, and production as similar as possible.
- Services used in test and production are the same, where applicable.

## **XI.** Logs ☑️
Treat logs as event streams.
- Log messages are sent (without being saved in any specific file), in cases of success or error, as the application is executed.

## **XII.** Admin processes ⌛
Run admin/management tasks as one-off processes.
- There is still no separate environment for running admin tasks on the project.

</br></br>

# **Microservices Patterns**

## **I.** Domain services ☑️
The project uses different domains to separate each part of the service according to its function.

## **II.** Business services ☑️
Project services are grouped according to their functionality in a specific context (accounts, payments, purchases, etc).

## **III.** API Gateway ⌛
Not implemented yet.

## **IV.** Process aggregator ⌛
Not implemented yet.

## **V.** Edge service ⌛
Not implemented yet.

## **VI.** Single DB vs Differents DB's ☑️
The project uses different databases (MongoDB and MySQL).

## **VII.** Asynchronous Events‌ ⌛
It has not yet been fully implemented.

## **VIII.** Log aggregation ⌛
Not implemented yet.

## **IX.** Aggregation of metrics ⌛
Not implemented yet.
